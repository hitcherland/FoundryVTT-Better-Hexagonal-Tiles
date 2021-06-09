import {ImprovedTile} from './tile.js';

Hooks.once('init', function() {
    CONFIG.Tile.objectClass = ImprovedTile;
});