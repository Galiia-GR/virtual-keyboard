const inputKeyletterRu=[1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097,
1079, 1093, 1098, 1092, 1099, 1074,1072,1087,1088,1086,1083, 1076, 1078,
1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];

export function drawKeyboard() {
  let draw='';
  for (let i=0; i<inputKeyletterRu.length;  i += 1){
    draw += `<div class = "key-letter__ru" >
    ${String.fromCharCode(inputKeyletterRu[i])}</div>`;
  }
  document.querySelector('.keyboard').innerHTML=draw;
};
