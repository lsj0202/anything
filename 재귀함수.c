#include<stdio.h>

int f(int n, int k){
	if(k==n) return 1;
	else if(k==1) return n;
	return f(n-1,k-1)+f(n-1,k);
}
int main(){
	int n,k;
	scanf("%d %d", &n,&k);
	printf("%d\n", f(n,k));
	return 0;
}
