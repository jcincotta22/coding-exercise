class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTreeNode {
  constructor() {
    this.root = null;
  }

  // implement
  insert = () => {
    console.log("implement");
  };

  getTree = () => {
    return {
      root: {
        value: this.root.value,
        left: this.root.left,
        right: this.root.right,
      },
    };
  };
}
