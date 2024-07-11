// import Listimg from '@/';

import Header from '../Header';
import ListCard from './components/listCard';
import { ListChart } from '@/app/lib/CardListData';

export default function List2(): JSX.Element {
  return (
    <>
      <div className="xl:w-[1300px] m-auto pb-[50px] p-6">
        <div>
          <h1 className="text-[64px] font-[400] font-montserrat mb-[30px]">Web Project</h1>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {ListChart.map((items, idx) => (
            <ListCard
              key={idx}
              Title={items.Title}
              SubTitle={items.SubTitle}
              ImageSrc={items.ImageSrc}
              Page={items.Page}
              Tag={items.Tag}
            />
          ))}
        </div>
      </div>
    </>
  );
}
