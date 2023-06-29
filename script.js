let numbers = {
	0:0,
	1:1,
	2:"abc".
	3:"def",
	4:"ghi",
	5:"jkl",
	6:"mno",
	7:"pqrs",
	8:"tuv",
	9:"wxyz"
};

function letterCombinations(input_digit) {
  //Complete the function
	var len = input_digit.length;
	var ans = [];
	if(!len){
		return [];
	}
	const bfs = (pos,str)=>{
		if(pos==len){
			ans.push(str);
		}else{
			let letters = numbers[input_digit[pos]];
			for(let i = 0; i<letters.length; i++){
				bfs(pos+1,str+letters[i]);
			}
		}
	}
	bfs(0,"");
	return ans;
};

module.exports = letterCombinations;
