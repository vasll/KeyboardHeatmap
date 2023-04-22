# KeyboardHeatmap
Draw a keyboard heatmap based on a keyboard layout and a language to show the most frequently typed keys

## Why?
### The issue with modern keyboards
Carpal tunnel and RSI are pretty common injuries amongst programmers who type all day on a keyboard, there are many factors that contribute to these types of injuries like bad posture and the ergonomy of your setup, one of these factors is also the layout of your keyboard.
### The QWERTY layout
You are most likely using the good ol' QWERTY layout on your keyboard which was born around the year 1870 and originally created exclusively for typewriters, but in the end it got adopted to keyboards. The issues with this layout are many but the biggest ones are:
- The keys are staggered and not placed in an [ortholinear position](https://tech-fairy.com/wp-content/uploads/2020/09/60-Keyboard-Staggered-VS-Ortholinear-Layout.jpg)
- Since it was intended for typewriters which can jam when typing fast, the letters have been placed so that they are distributed in the most homogenous way possible, this makes the wrists and fingers move a ton. 

Modern keyboard layouts like [Colemak](https://colemakmods.github.io/mod-dh/) place all the most commonly used in the middle row, making the typing experience better for your fingers and wrists. I created this tool to visualize the heatmap of letter frequencies on different layouts. _Keep in mind that basing a layout on the frequency is not enough, many layouts use other techniques and each one has its perks._

## Example visualization
There are some predefined layouts and languages already loaded into `/src/stores/` that you can use <br>
Layout: `colemak-dh-ansi` Language: `english`

![app screenshot](https://i.imgur.com/pTkfuDw.png)
