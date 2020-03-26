/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    const len = nums.length;
    if (nums == null || len < 3) return result;
    nums.sort((a, b) => a-b);
    for (let i=0; i<len; i++) {
        if (nums[i]>0) break;
        if (i>0 && nums[i] === nums[i-1]) {
            continue;
        }
        let m = i+1;
        let n = len-1;
        while (m<n) {
            let sum = nums[i] + nums[m] + nums[n];
            if (sum === 0) {
                result.push([nums[i], nums[m], nums[n]]);
                while (nums[m] === nums[m+1]) m++;
                while (nums[n] === nums[n-1]) n--;
                l++;
                r--;
            } else if (sum < 0){
                m++;
            } else {
                n--;
            }
        }
    }
    return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);