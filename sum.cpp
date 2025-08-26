#include<iostream>
using namespace std;
class Solution {
public:
int sum,i,j,a[10],n,t;
    void input(){
        cout<<"Enter the array size:";
        cin>>n;
        for(i=0;i<n;i++){
            cin>>a[i];
        }  
        cout<<"Enter target";
        cin>>t;
    }
    int addsum(){
        for(i=0;i<n;i++) {
            for(j=i+1;j<n;j++){
                sum = a[i] + a[j];
                if(sum == t){
                    cout << "Pair found at indices: " << i << " and " << j << endl;
                    break;
                }
            }
        }
    }  
};
int main(){
    Solution p;
    p.input();
    p.addsum();
    return 0;
}