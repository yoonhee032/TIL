using System;

namespace Switch
{
    class MainAPp
    {
        static void Main(string[] args)
        {
            Console.Write("요일을 입력하세요.(일,월,화,수,목,금,토) : ");
            string day = Console.ReadLine();

            switch (day)
            {
                case "일":
                    Console.WriteLine("일요일");
                    break;
                case "월":
                    Console.WriteLine("월요일");
                    break;
                case "화":
                    Console.WriteLine("화요일");
                    break;
                case "수":
                    Console.WriteLine("수요일");
                    break;
                case "목":
                    Console.WriteLine("목요일");
                    break;
                case "금":
                    Console.WriteLine("금요일");
                    break;
                case "토":
                    Console.WriteLine("토요일");
                    break;
                default:
                    Console.WriteLine($"{day}는 요일이 아닙니다.");
                    break;
            }
        }
    }
}