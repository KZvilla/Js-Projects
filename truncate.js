function truncateString(str, num) {
  {{let textPortion = str.slice(0,num);
  if (str.length > textPortion.length) { 
    textPortion += "...";
    return textPortion;
  }
  return textPortion}}
  /* let textPortion = str.slice(0,num);
  return (str.length > textPortion.length) ? textPortion+="...":  textPortion; */
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));