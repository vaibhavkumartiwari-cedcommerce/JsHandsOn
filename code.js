function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum == 0) {
      return [startNum];
    } else {
      var res = rangeOfNumbers(startNum, endNum - 1);
      res.push(endNum);
      return res;
    }
  };