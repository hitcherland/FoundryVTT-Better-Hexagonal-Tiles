import {BHTTile, BHTTilesLayer} from './tile.js';

Hooks.once('init', function() {
    CONFIG.Tile.objectClass = BHTTile;
    CONFIG.Tile.layerClass = BHTTilesLayer;
    Canvas.layers.tiles.layerClass = BHTTilesLayer;
});