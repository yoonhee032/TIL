//부동 소수점 형식과 정수 형식 사이의 변환

using System;

namespace FloatToIntegral
{
    class MainApp
    {
        static void Main(string[] args)
        {
            float a = 0.9f;
            int b = (int)a;
            Console.WriteLine(b);

            float c = 1.1f;
            int d = (int)c; 
            Console.WriteLine(d);
        }
    }
}