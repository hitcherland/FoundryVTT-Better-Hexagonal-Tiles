import {BHTTile} from './tile.js';

Hooks.once('init', function() {
    CONFIG.Tile.objectClass = BHTTile;
});