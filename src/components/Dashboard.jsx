import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import resources from "../DB/resources.json";
import NotFound from "./NotFound";
const name = "Zeetools";
function Dashboard() {
  const [data, setData] = useState(resources);
  const [currentPage, setCurrentPage] = useState(1);
  const [debounce, setDebounce] = useState();
  const [loading, setLoading] = useState(false);

  const cardsPerPage = 16;
  const pages = Math.ceil(data.length / cardsPerPage);
  const startIdx = (currentPage - 1) * cardsPerPage;
  const endInx = startIdx + cardsPerPage;
  const cardsToShow = data.slice(startIdx, endInx);
  const [noData, setNoData] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState([]);

  useEffect(() => {
    const counts = {};
    data.forEach((item) => {
      const category = item.category.toUpperCase();
      counts[category] = (counts[category] || 0) + 1;
    });
    const arr = Object.entries(counts).map(([categoryName, totalCount]) => ({
      categoryName,
      totalCount,
    }));
    setCategoryCounts(arr);
  }, [data]);

  const goBack = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goTo = (page) => {
    setCurrentPage(page);
  };
  const ButtonsToDisplay = () => {
    const buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return buttons;
  };

  const search = (val) => {
    setLoading(true);
    if (debounce) {
      clearTimeout(debounce);
    }
    const debounceCall = setTimeout(() => {
      if (val == "") {
        setData(resources);
      } else {
        const searchRes = data.filter((item) => {
          return item.productName.toLowerCase().includes(val.toLowerCase());
        });
        if (searchRes.length == 0) {
          setNoData(true);
        } else {
          setData(searchRes);
        }
      }
      setDebounce(debounceCall);
    }, 500);
    setLoading(false);
  };

  return (
    <>
      <Header name={name} search={search} />
      {/* <Sidebar category={categoryCounts} /> */}
      {noData ? (
        <NotFound />
      ) : (
        <>
          <div className="cardGroup">
            {cardsToShow.map((item, idx) => {
              return (
                <Card
                  data={item}
                  key={idx}
                  categoryChosen={(val) => {
                    let newData = data.filter((item) => item.category == val);
                    console.log(newData);
                    setData(newData);
                  }}
                />
              );
            })}
          </div>
          <div className="navigationButton">
            <button onClick={goBack} disabled={currentPage == 1}>
              Prev
            </button>
            <select value={currentPage} onChange={(e) => goTo(e.target.value)}>
              {ButtonsToDisplay()}
            </select>
            <button onClick={goNext} disabled={currentPage == pages}>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
