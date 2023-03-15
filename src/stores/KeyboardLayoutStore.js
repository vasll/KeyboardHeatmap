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
})