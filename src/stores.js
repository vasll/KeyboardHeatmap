
import { readable, writable } from "svelte/store"

export const LayoutStore = writable([
    {  
        name: 'qwerty',
        keyboardRows: [
            ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            ["z", "x", "c", "v", "b", "n", "m"]
        ]
    },
    {  
        name: 'colemak',
        keyboardRows: [      
            ["q", "w", "f", "p", "g", "j", "l", "u", "y"],
            ["a", "r", "s", "t", "d", "h", "n", "e", "i", "o"],
            ["z", "x", "c", "v", "b", "k", "m"]
        ]
    },
])


export const LanguageFrequencyStore = readable({
    english: {
        "e": 11.1607, "a": 8.4966, "r": 7.5809,
        "i": 7.5448, "o": 7.1635, "t": 6.9509,
        "n": 6.6544, "s": 5.7351, "l": 5.4893,
        "c": 4.5388, "u": 3.6308, "d": 3.3844,
        "p": 3.1671, "m": 3.0129, "h": 3.0034,
        "g": 2.4705, "b": 2.072, "f": 1.8121,
        "y": 1.7779, "w": 1.2899, "k": 1.1016,
        "v": 1.0074, "x": 0.2902, "z": 0.2722,
        "j": 0.1965, "q": 0.1962
    }
})