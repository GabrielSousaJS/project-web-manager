import './styles.css';

import ReactPaginate from "react-paginate";
import backIcon from '../../assets/icons/backIcon.svg';

type Props = {
  pageCount: number;
  range: number;
  onChange: (pageNumber: number) => void;
}

export function Pagination({ pageCount, range, onChange }: Props) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="flex justify-center align-items-center"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousLabel={<img src={backIcon} />}
      nextLabel={<img src={backIcon} />}
      nextClassName="arrow-next"
      disabledLinkClassName="arrow-disabled"
      onPageChange={(items) => onChange(items.selected)}
    />
  );
}