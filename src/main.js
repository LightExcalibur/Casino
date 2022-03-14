import Game from "../lib/Game.js";
import TitleScreenState from "./states/game/TitleScreenState.js";
import
{
    canvas,
    context,
    fonts,
    images,
    keys,
    souds,
    stateMachine,
    sounds,
} from "./globals.js";

fetch('./src/config.json').then(response => response.json())
.then(response =>
{
    const
    {
        images: imageDefinitions,
        fonts: fontDefinitions,
        sounds: soundDefinitions,
    } = response;

    images.load(imageDefinitions);
    fonts.load(fontDefinitions);
    sounds.load(soundDefinitions);

    stateSt
})