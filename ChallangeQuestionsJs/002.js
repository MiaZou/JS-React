function commonParentNode(node1, node2) {
  if node1.contains(node2) {
    return node1;
  } else {
    return commonParentNode(node1.parentNode, node2);
  }
}


