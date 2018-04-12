const defaultKeys = [{
    name: 'name'
}, {
    name: 'description',
    content: true
}, {
    name: 'resources',
    content: true
}, {
    name: 'github',
    content: true
}, {
    name: 'quadrant',
    keyword: true
}, {
    name: 'type',
    keyword: true
}, {
    name: 'platform',
    tags: true
}];

const whitelistedKeys = ['filename', 'label', 'quadrant', 'ring', 'platform'];
const quandrants = ['incubate', 'de-emphasise', 'ubiquitous', 'scale/grow'];
const rings = ['concepts', 'tools', 'frameworks'];

module.exports = {
    defaultKeys,
    whitelistedKeys,
    quandrants,
    rings
};