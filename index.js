const server = require('diet')
const app = server()
const db = require('./db.json')
const _ = require('lodash')
const crossOrigin = require("diet-cross-origin")
var distance = require('google-distance-matrix')
var NodeGeocoder = require('node-geocoder')
const key = 'AIzaSyAsGgRnC34wiGutlNDOOhb83VzdlZzr1i4'
distance.key(key)
distance.language('es')

const options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: key, // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
}
const geocoder = NodeGeocoder(options);

const opts = {
	defaults: {
        origin: "*",
        "allow-headers": "content-type"
    }
};

app.listen('http://localhost:8000')

app.post('/login', function($) {
    const pass = _.isUndefined($.body.password)
    if ( pass ) { 
        $.error('msg', 'Input ')
        $.failure()
    } else {
        const obj = {
            username: $.body.username, 
            password: $.body.password.toString()
        }
        const flag = _.find(db.user, obj) 
        if (flag) { 
            $.success()
        } else {
            $.error('msg', 'Invalid user or passwords')
            $.failure()
        }
    }
})

app.post('/travel', function($) {
    const origins = []
    const destinations = []
    const { originAddress } = $.body
    const { destinyAddress } = $.body
    destinations.push(destinyAddress)
    origins.push(originAddress)
    distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
            const { destination_addresses } = distances
            const dest = destination_addresses[0]
            let destination = { name: dest }

            
            const { origin_addresses } = distances
            const orig = origin_addresses[0]
            let origin = { name: orig }
            geocoder.geocode(orig)
                .then((res) => {
                    const [ { latitude } ] = res
                    const [ { longitude } ] = res
                    origin.lat = latitude
                    origin.lon = longitude
                })
                .then(
                    () => { 
                        $.data.origin = origin
                        geocoder.geocode(dest)
                        .then((res) => {
                            const [ { latitude } ] = res
                            const [ { longitude } ] = res
                            destination.lat = latitude
                            destination.lon = longitude
                        }).then(
                            ()=> {
                                $.data.destination = destination
                                $.json()
                            }
                        )
                        .catch(function(err) {
                            console.log(err)
                        })
                    } 
                )
                .catch(function(err) {
                    console.log(err)
                })

            const { rows } = distances
            const [ { elements } ] = rows
            const [ { distance } ] = elements
            const [ { duration } ] = elements
            $.data.duration = duration
            $.data.distance = distance
        }
    })
})



app.header(crossOrigin(opts));
