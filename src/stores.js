
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
        "E": 11.1607, "A": 8.4966, "R": 7.5809,
        "I": 7.5448, "O": 7.1635, "T": 6.9509,
        "N": 6.6544, "S": 5.7351, "L": 5.4893,
        "C": 4.5388, "U": 3.6308, "D": 3.3844,
        "P": 3.1671, "M": 3.0129, "H": 3.0034,
        "G": 2.4705, "B": 2.072, "F": 1.8121,
        "Y": 1.7779, "W": 1.2899, "K": 1.1016,
        "V": 1.0074, "X": 0.2902, "Z": 0.2722,
        "J": 0.1965, "Q": 0.1962
    }
})