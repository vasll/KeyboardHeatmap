import { writable } from "svelte/store"

export const KeyboardLayoutStore = writable({
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
})