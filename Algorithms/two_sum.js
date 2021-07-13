/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const  comp_map = {}
    for(let i=0; i< nums.length; i++) {
        const  comp = target - nums[i];
        if(comp in comp_map){
            return [i, comp_map[comp]];
        }
        comp_map[nums[i]] = i;
    };
    return null;
};

console.log(twoSum([2,7,11,15],9))