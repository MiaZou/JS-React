/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);
    const res = [];
    for (let i=0; i<nums.length-2; i++) {
        if (nums[i] > 0) break;
        if (i>0 && nums[i] === nums[i-1]) continue;
        let j=i+1; k=nums.length-1;
        while (j<k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) j++;
            else if (sum > 0) k--;
            else {
                const curr = [nums[i], nums[j], nums[k]];
                res.push(curr);
                while (j < k && nums[j] === nums[j+1]) j++;
                while (j < k && nums[k] === nums[k-1]) k--;
                j++;
                k--;
            };           
        };

    };
    
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));