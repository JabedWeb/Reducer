#include <stdio.h>
#include <string.h>
#include <ctype.h>
 void isPalindrome(char str[]);
void main()
{
    char str[100], word[20], mx[20], mn[20], c;
    int i = 0, j = 0, flg = 0;
	
       printf("\n\nFind the largest and  smallest word in a string :\n");
       printf("-----------------------------------------------------\n");		
 
	printf("Input the string : ");
    i = 0;
    do
    {
        fflush(stdin);
        c = getchar();
        str[i++] = c;
 
    } while (c != '\n');
    str[i - 1] = '\0';
    for (i = 0; i < strlen(str); i++)
    {
        while (i < strlen(str) && !isspace(str[i]) && isalnum(str[i]))
        {
            word[j++] = str[i++];
        }
        if (j != 0)
        {
            word[j] = '\0';
            if (!flg)
            {
                flg = !flg;
                strcpy(mx, word);
                strcpy(mn, word);
            }
            if (strlen(word) > strlen(mx))
            {
                strcpy(mx, word);
                isPalindrome(mx);
                
            }
            if (strlen(word) < strlen(mn))
            {
                strcpy(mn, word);
            }
            j = 0;
        }
    }
    printf("The largest word is '%s' \nand the smallest word is '%s'", mx, mn);
 }
 
 void isPalindrome(char str[])
{
    // Start from leftmost and rightmost corners of str
    int l = 0;
    int h = strlen(str) - 1;
 
    // Keep comparing characters while they are same
    while (h > l)
    {
        if (str[l++] != str[h--])
        {
            printf("%s is not a palindrome\n", str);
            return;
        }
    }
    printf("%s is a palindrome\n", str);
}