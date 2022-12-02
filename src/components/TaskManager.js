const TaskManager = ({ data }) => {
  const calculateStatus = (id) => {
    const hello = data.filter((item) => item.id === id)[0];
    let count = 0;
    hello &&
      hello?.assignment.forEach((item) => {
        if (item.coding && item.thory) {
          count++;
        }
      });
    return count;
  };

  //   const checkRevieweStatus = (id) => {
  //     const hello = data.filter((item) => item.id === 1)[0];
  //     let count = 0;
  //     let total = 0;
  //     hello &&
  //       hello?.assignment.forEach((item) => {
  //         total = item.reviewers.length;
  //         item &&
  //           item?.reviewers.forEach((x) => {
  //             console.log(x.status);
  //             if (x.status) count++;
  //           });
  //       });
  //     console.log(count);
  //     return { count, total };
  //   };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Week 1</th>
            <th>Week 2</th>
            <th>Week 3</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.name}
                  <div>{`${calculateStatus(
                    item.id
                  )} Assignments completed`}</div>
                  {/* <div>{`${checkRevieweStatus(item.id).count}/ ${
                    checkRevieweStatus(item.id).total
                  } Reviewers reviewed `}</div> */}
                </td>

                <td>
                  <div>
                    <button>Add Assignment details</button>
                  </div>
                  <div>
                    {item.assignment[0].reviewers &&
                      item.assignment[0].reviewers.map((item) => {
                        return (
                          <>
                            <input type="checkbox" checked={item.status} />
                            <span>{item.type}</span>
                          </>
                        );
                      })}
                  </div>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default TaskManager;
