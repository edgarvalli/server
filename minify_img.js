const sharp = require('sharp');

sharp('public/images/profiles/default.png')
.resize(76, 76)
.toFile('public/images/profiles/default_avatar.png', error => {
    console.log('works')
})