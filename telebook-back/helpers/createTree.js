module.exports =  function createTree(array) {
    let map = {}, roots = [], i, node
    for (i = 0; i < array.length; i += 1) {
        map[array[i].id] = i
        array[i].dataValues.subunits = []
    }

    for (i = 0; i < array.length; i += 1) {
        node = array[i]
        if (!node.parentId) {
            roots.push(node)
        }  
        else {
            array[map[node.parentId]].dataValues.subunits.push(node)
        }
    }

    return roots
}