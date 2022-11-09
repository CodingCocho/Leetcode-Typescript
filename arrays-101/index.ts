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

function removeElement(nums: number[], val: number): number {
 
    let solution = 0;
    
    for(let i: number = 0; i < nums.length-solution; i++)
    {
        if(nums[i] === val)
        {
            let temp: number = nums[nums.length-1-solution];
            nums[nums.length-1-solution] = 51
            nums[i] = temp;
            solution++;
            i--;
        }    
    }
    return nums.length - solution;
};

function removeDuplicates(nums: number[]): number {
    let index = 1;
    let current = nums[0];
    for (let i=1; i< nums.length; i++) {
// [0, 0, 1, 1, 1]
// i = 1
// current = 0
// nums[1] = 0
// i = 2
// current = 0
// nums[2] = 1
// nums[1] = nums[2] = 1
// current = nums[2] = 1
// index = 2 
// no other new digit therefore we can return now and not care what is past index
// [0, 1, 1, 1, 2]
// nums[4] = 2
// nums[2] = nums[4] = 2
// current = nums[4] = 2
// index = 3
// [0, 1, 2, 1, 2]
        if (nums[i] !== current) {
            nums[index] = nums[i];
            current = nums[i];
            index++;
        }
    }
    return index;

};

function checkIfExist(arr: number[]): boolean {
    const myMap = new Map();
    
    for(let counter: number = 0; counter < arr.length; counter++)
    {
        if(myMap.has(2 * arr[counter]) || myMap.has(arr[counter] / 2))
          {
            return true;
          }
        myMap.set(arr[counter], counter)

    }
    return false;
};

function validMountainArray(arr: number[]): boolean 
{
  let maxHeight: number = 0;
  let solution: boolean = false;

  for(let counter: number = 0; counter < arr.length - 1; counter++)
  {
    if(maxHeight)
      {
        if(!(arr[counter] > arr[counter + 1]))
          {
            return false;
          }
      }
    else
      {
        if(!(arr[counter] < arr[counter + 1]))
         {
          if(arr[counter] === arr[counter + 1])
            {
              return solution;
            }
          else if(counter === 0)
            {
              return solution;
            }
          else
            {
              maxHeight = arr[counter]
              solution = true;
            }
         }
      }
  }
  return solution;
};

function replaceElements(arr: number[]): number[] {
    if(arr.length === 1)
      {
        arr[0] = -1;
      }
    else
      {
        for(let counter: number = 0; counter < arr.length - 1; counter++)
          {
            
            let currentMax: number = arr[counter + 1];
            for(let innerCounter: number = counter + 1; innerCounter < arr.length; innerCounter++)
              {
                if(arr[innerCounter] > currentMax)
                  {
                    currentMax = arr[innerCounter];
                  }
              }
            arr[counter] = currentMax;
          }
        arr[arr.length-1] = -1;
      }
    return arr;
  };

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let index: number = 0;
    for(let counter: number = 0; counter < nums.length; counter++)
    {
      
      if(nums[counter] !== 0)
        {
          let temp: number = nums[counter];
          nums[counter] = 0;
          nums[index] = temp;
          index++;
        }
    }
   
    
  };

  function sortArrayByParity(nums: number[]): number[] {
    let index: number = 0;
    for(let counter: number = 0; counter < nums.length; counter++)
      {
        if(nums[counter] % 2 === 0)
          {
            let temp: number = nums[counter];
            nums[counter] = nums[index];
            nums[index] = temp;
            index++;
          }
      }
    return nums;
  };

  function heightChecker(heights: number[]): number {
    let solution: number = 0;
    let original: number[] = [...heights];
    let bubbleSortSwap: boolean = false;
    if(heights.length === 1)
    {
      return 0;
    }
    do{
      bubbleSortSwap = false;
      for(let counter: number = 0; counter < heights.length-1; counter++)
        {
          if(heights[counter] > heights[counter+1])
            {
              let height: number = heights[counter];
              heights[counter] = heights[counter+1];
              heights[counter+1] = height;
              bubbleSortSwap = true;
            }
        }
    }while(bubbleSortSwap)
    
      for(let counter: number = 0; counter < heights.length; counter++)
        {
          if(original[counter] !== heights[counter])
            {
              solution++
            }
        }
    return solution;
  };

  function thirdMax(nums: number[]): number {
    if(nums.length === 1)
      {
        return nums[0];
      }
    
    if(nums.length === 2)
      {
        if(nums[0] > nums[1])
          {
            return nums[0]
          }
        else
          {
            return nums[1]
          }
      }
    
    let maxNums: number[] = [];
    
  //   Apply a bubble sort algorithm
    do
      {
        for(let counter: number = 0; counter < nums.length-1; counter++)
          {
            if(nums[counter] > nums[counter+1])
              {
                let temp: number = nums[counter];
                nums[counter] = nums[counter+1]
                nums[counter+1] = temp;
              }
          }
        let aMaxNum = nums.pop();
        if(!maxNums.includes(aMaxNum))
          {
            maxNums.push(aMaxNum);
          }
      }while(maxNums.length !== 3 && nums.length !== 0)
        
    if(maxNums.length !== 3)
      {
        return maxNums[0];
      }
    return maxNums[2];
  };

  function findDisappearedNumbers(nums: number[]): number[] {
    let solution: number[] = [];
    for(let counter: number = 0; counter < nums.length; counter++)
      {
        if(!nums.includes(counter+1))
          {
            solution.push(counter+1)
          }
      }
    return solution;
  };