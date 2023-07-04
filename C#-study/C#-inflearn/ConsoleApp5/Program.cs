using System;

class Program
{
    public static void Main(string[] args)
    {
        //오버플로우를 컴파일러가 해결하고 있음
        /*
        sbyte num = 128;
        Console.WriteLine(num);
        */


        sbyte value1 = 64;
        sbyte value2 = 64;
        // sbyte value3 = value1 + value2; //오류 발생
        int value3 = value1 + value2; //암시적 형변환, 컴파일러가 자동으로 형변환
        int value4 = (int)value1 + value2; //명시적 형변환과 암시적 형변환이 사용된 식

        Console.WriteLine(value3);
        Console.WriteLine(value4);
    }
}