import { LazyToDoBlock } from '@/components/ui/lazy-to-do-block';

export const LazyToDoSection = () => (
  <div className="group">
    <div className="relative outline-dashed outline-1 outline-offset-8  outline-transparent transition-all hover:outline-secondary">
      <div className="absolute right-[-630px] top-0 text-left text-secondary  opacity-0 group-hover:opacity-100">
        <h5 className="text-xl font-medium">
          Эта секция выходит за границы моей лени
        </h5>
        <p>
          <b>Граница лени</b> - очень важный инструмент во избежания проблемы
          Feature creep
        </p>
        <p>
          <b>Feature creep</b> (Расползание функций) — это чрезмерное постоянное
          расширение <br />
          или добавление новых функций в продукт, особенно в компьютерном <br />
          программном обеспечении, видеоиграх, бытовой и деловой электронике.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <LazyToDoBlock className="h-[20px] w-[100px] rounded-full" />
        <LazyToDoBlock className="h-[76px] w-[100%]" />
        <LazyToDoBlock className="h-[76px] w-[100%]" />
      </div>
    </div>
  </div>
);
