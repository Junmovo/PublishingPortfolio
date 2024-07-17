import ListCard from './components/listCard';
import { ListChart } from '@/app/lib/CardListData';

export default function List2(): JSX.Element {
  return (
    <>
      <div className="xl:w-[1300px] m-auto pb-[50px] p-6">
        <div>
          <h1 className="text-[64px] font-[400] font-montserrat mb-[30px]">Web Project</h1>
        </div>
        <div>
          <h1 className="text-[24px] font-[600] mb-[30px] font-montserrat leading-6	">
            Personal
            <p className="text-gray-400 text-[16px] mt-[5px] font-NanumNeo">개인 프로젝트</p>
          </h1>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {ListChart.filter((el) => el.Type === '개인').map((items, idx) => (
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
        <div>
          <h1 className="text-[24px] font-[600] mb-[30px] mt-[60px] font-montserrat leading-6">
            Company
            <p className="text-gray-400 text-[16px] mt-[5px] font-NanumNeo">회사 프로젝트</p>
          </h1>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {ListChart.filter((el) => el.Type === '회사').map((items, idx) => (
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
