#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int findMissingNumber(const vector<int>& nums) {
    int n = nums.size() + 1;
    int totalSum = n * (n + 1) / 2;
    int arraySum = 0;
    
    for (int num : nums) {
        arraySum += num;
    }
    
    return totalSum - arraySum;
}

int main(){
    int n;
    
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    vector<int> nums(n);
    cout << "Enter " << n << " integers separated by spaces: ";
    for (int i = 0; i < n; ++i) {
        cin >> nums[i];
    }

    int missingNumber = findMissingNumber(nums);
    cout << "The missing number is: " << missingNumber << endl;
}