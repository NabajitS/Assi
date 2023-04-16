const chai = window.chai
const expect = chai.expect


describe('solution', () => {
  it('should correctly compute the average of missing days', () => {
    const input = {"2020-01-01": 4, "2020-01-02":4, "2020-01-03":6, "2020-01-04":8, "2020-01-05":2 , "2020-01-06":-6, "2020-01-07": 2, "2020-01-08": -2};
    const expectedOutput = {'Fri': 6, 'Mon': -6, 'Sat': 8, 'Sun': 2, 'Thu': 4, 'Tue': 2, 'Wed': 2};

    expect(solution(input)).to.deep.equal(expectedOutput)
  });

  it('should correctly compute the average of missing days with different input', () => {
    const input = {'2020-01-01':6, '2020-01-04':12, '2020-01-05':14, '2020-01-06':2, '2020-01-07': 4};
    const expectedOutput = {'Fri': 10, 'Mon': 2, 'Sat': 12, 'Sun': 14, 'Thu': 9, 'Tue': 4, 'Wed': 6};

    expect(solution(input)).to.deep.equal(expectedOutput)
  });

});


// const chai = window.chai
// const expect = chai.expect

// // Replace with the actual path to your solution file

