function findMaxConsecutiveOnes(nums: number[]): number {
  let solution: number = 0;
  let newSolution: number = 0;
  for(let counter: number = 0; counter < nums.length; counter++)
      {
          if(nums[counter] === 1)
              {
                  newSolution++;
              }
          else
              {
                  if(newSolution > solution)
                      {
                          solution = newSolution;
                      }
                  newSolution = 0;
              }
      }
  // Last check
  if(newSolution > solution)
      {
          solution = newSolution;
      }
  return solution;
};

function findNumbers(nums: number[]): number {
  let solution: number = 0;
  for(let counter: number = 0; counter < nums.length; counter++)
      {
          if(nums[counter].toString().length % 2 === 0)
              {
                  solution++
              }
      }
  return solution;
  
};

function sortedSquares(nums: number[]): number[] {
    let solution: number[] = [];
    for(let counter: number = 0; counter < nums.length; counter++)
        {
            solution.push(nums[counter] * nums[counter]);
        }
    
    // Bubble Sort
    for(let lengthOfSolution: number = 0; lengthOfSolution < solution.length; lengthOfSolution++)
        {
            for(let innerLength: number = 0; innerLength < solution.length - lengthOfSolution; innerLength++)
                {
                    if(solution[innerLength] > solution[innerLength + 1])
                        {
                            let temp: number = solution[innerLength];
                            solution[innerLength] = solution[innerLength + 1];
                            solution[innerLength + 1] = temp;
                        }
                }
        }
    return solution;
};

/**
 Do not return anything, modify arr in-place instead.
 */
 function duplicateZeros(arr: number[]): void {
    let originalLength: number = arr.length;

    for(let counter: number = 0; counter < arr.length; counter++)
    {   

        if(arr[counter] === 0)
            {
                
                arr.splice(counter, 0, 0)                
                counter++;
            }
    }

    while(arr.length > originalLength)
    {
        arr.pop();
    }
};

/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if(!(n === 0))
    {
        let location2: number = 0;
        for(let location: number = m; location < nums1.length; location++)
        {
            nums1[location] = nums2[location2];
            location2++;
        }
    }
    
//     Bubble Sort
    for(let location: number = 0; location < nums1.length; location++)
        {
            for(let location2: number = 0; location2 < nums1.length - location; location2++)
                {
                    if(nums1[location2] > nums1[location2 + 1])
                        {
                            let temp: number = nums1[location2];
                            nums1[location2] = nums1[location2 + 1];
                            nums1[location2 + 1] = temp;
                        }
                }
        }
};