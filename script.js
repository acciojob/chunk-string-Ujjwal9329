  if (!str) {
    return [];
  }

  let chunks = [];
  
  for (let i = 0; i < str.length; i += size) {
   chunks.push(str.slice(i,i+size));
  }
  return chunks;
   
}