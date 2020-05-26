export const decodedValue = (color_1, color_2) => {
  color_1 = color_1.toLowerCase()
  color_2 = color_2.toLowerCase()
  return COLORS.indexOf(color_1).toString() + COLORS.indexOf(color_2).toString()
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

//console.log(decodedValue('Brown', 'black'))
