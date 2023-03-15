import { writable } from "svelte/store"

export const KeyboardLayoutStore = writable({
    "azerty": {
        "keyboardRows": [     
            ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
            ["w", "x", "c", "v", "b", "n"]
        ]
    },
    'qwerty': {  
        keyboardRows: [
            ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            ["z", "x", "c", "v", "b", "n", "m"]
        ]
    },
    'colemak': {  
        keyboardRows: [      
            ["q", "w", "f", "p", "g", "j", "l", "u", "y"],
            ["a", "r", "s", "t", "d", "h", "n", "e", "i", "o"],
            ["z", "x", "c", "v", "b", "k", "m"]
        ]
    },
    'colemak-dh-ansi': {  
        keyboardRows: [      
            ["q", "w", "f", "p", "g", "j", "l", "u", "y"],
            ["a", "r", "s", "t", "g", "m", "n", "e", "i", "o"],
            ["x", "c", "d", "v", "z", "k", "h"]
        ]
    },
    'colemak-dh-iso': {  
        keyboardRows: [      
            ["q", "w", "f", "p", "g", "j", "l", "u", "y"],
            ["a", "r", "s", "t", "g", "m", "n", "e", "i", "o"],
            ["z", "x", "c", "d", "v", "k", "h"]
        ]
    },
    "qwertz": {
        keyboardRows: [
            ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p"],
            ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            ["y", "x", "c", "v", "b", "n", "m"]
        ]
    },
    "dvorak": {
        keyboardRows: [
            ["p", "y", "f", "g", "c", "r", "l"],
            ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s"],
            ["q", "j", "k", "x", "b", "m", "w", "v", "z"]
        ]
    },
    "qzerty": {
        keyboardRows: [
            ["q", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            ["w", "x", "c", "v", "b", "n", "m"]
        ]
    },
    "workman": {
        keyboardRows: [
            ["q", "d", "r", "w", "b", "j", "f", "u", "p"],
            ["a", "s", "h", "t", "g", "y", "n", "e", "o", "i"],
            ["z", "x", "m", "c", "v", "l", "k"]
        ]
    },
    "norman": {
        keyboardRows: [
            ["q", "w", "f", "p", "g", "j", "l", "u", "y"],
            ["a", "r", "s", "t", "d", "h", "n", "e", "i", "o"],
            ["z", "x", "c", "v", "b", "k", "m"]
        ]
    }
})