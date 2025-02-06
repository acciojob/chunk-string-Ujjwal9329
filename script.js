  if (!str) {
    return [];
  }

  let result = [];
  
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));  
  }
  
  return result;  
}