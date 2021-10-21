function Longest_Common_Subsequence(string1 ,string2) {
    if( !string1  || !string2) {
        return {
            lcs : 0,
            offest: 0,
            subsequence : ""
        };
    }
    let lcs = 0
    let table = [];
    let lastSubIndex = 0;
    for(let row =0; row <= string1.length; row++) {
        table[row] = [];
        for(let col = 0 ; col <= string2.length; col++){
            table[row][col] = 0;
        }
    }
    
    for (let i = 0; i < string1.length; i++) {
        for(let j= 0; j < string2.length; j++) {
            if(string1[i] === string2[j]) {
                if(table[i][j] === 0) table[i + 1][j + 1] = 1;
                else                  table[i + 1][j + 1] = table[i][j] + 1;
                if(table[i + 1][j + 1] >lcs) {
                    lcs = table[i + 1][j + 1];
                    lastSubIndex = i;
                }
            }
            else {
                table[i + 1][j + 1] = 0;
            }
        }
    }
    console.log(table);
    return {
        lcs : lcs,
        offest : lastSubIndex - lcs + 1,
        subsequence : string1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1)
    };
}

console.log(Longest_Common_Subsequence("hello","hi"));
console.log(Longest_Common_Subsequence("hish","fish"));
console.log(Longest_Common_Subsequence("vista","hish"));
