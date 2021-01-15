export default function(edges){
  let reformatted = []
  for(var el of edges){
    reformatted.push(el.node)
  }
  return reformatted
}
