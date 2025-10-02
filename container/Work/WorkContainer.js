import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import WorkItemTwo from "../../components/Work/WorkItemTwo.jsx";
import WorkFilter from "../../components/Work/WorkFilter.jsx";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { getToken } from "../../services/tokenservice.js";
import { getProjects } from "../../services/projectsservices.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const WorkContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [filterProjects, setfilterProjects] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});

  const [visibleData, setVisibleData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          setLoading(true);

          const Allproject = await getProjects();
          setProject(Allproject);

          // Handle filtering based on slug
          let filtered = Allproject;
          if (slug) {

            // const slugTerms = slug.toLowerCase().split(" ");
            const slugTerms = slug
              .toLowerCase()
              .replace(/\.js/gi, "-js") // Replace only ".js" with "-js"
              .replace(/[\s_]+/g, "-**")    // Replace spaces and underscores with "-"
              .split("-");

            filtered = Allproject.filter((project) =>
              slugTerms.some(
                (term) =>
                  project.projectName.toLowerCase().includes(term) ||
                  project.projectCategory.toLowerCase().includes(term) ||
                  project.technolgies.toLowerCase().includes(term) ||
                  project.description.toLowerCase().includes(term) ||
                  project.projectSubCategory.toLowerCase().includes(term) ||
                  project.smallDesciption.toLowerCase().includes(term)
              )
            );
          }
          // const slugTerms = slug.toLowerCase().split(" ");

          setfilterProjects(filtered);
          // console.log(slug ? "Filtered Projects:" : "Projects:", filtered);

          // Map categories
          const categoryMap = filtered.reduce((acc, project) => {
            const { projectCategory } = project;
            if (!acc[projectCategory]) {
              acc[projectCategory] = [];
            }
            acc[projectCategory].push(project);
            return acc;
          }, {});

          setCategories(Object.keys(categoryMap));
          setCategoryMap(categoryMap);

          // Initialize visible data
          const initialVisibleData = filtered.slice(0, itemsToShow);
          setVisibleData(initialVisibleData); // Display initial chunk
          setHasMore(filtered.length > itemsToShow); // Determine if more items are available
        } catch (error) {
          console.error("Error fetching projects:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [token, slug, itemsToShow]);

  const handleProjectWithCategory = useCallback(
    async (category) => {
      try {
        const filteredProjects =
          category === "All" ? projects : categoryMap[category] || [];

        // Reset visible data and hasMore when category changes
        setfilterProjects(filteredProjects);
        setVisibleData(filteredProjects.slice(0, itemsToShow));
        setHasMore(filteredProjects.length > itemsToShow);
      } catch (error) {
        console.error(error);
      }
    },
    [categoryMap, projects, itemsToShow]
  );

  const loadMoreData = () => {
    if (visibleData.length >= filterProjects.length) {
      setHasMore(false); // Stop loading if all data is shown
      return;
    }

    // Load the next chunk of data (e.g., 3 more items)
    setTimeout(() => {
      setVisibleData((prevVisibleData) =>
        filterProjects.slice(0, prevVisibleData.length + 3)
      );
    }, 500); // Simulate a delay for smoother loading effect
  };

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0) === word.charAt(0).toUpperCase()
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          headingOption="title fz-32"
          title="Crafting Effective Digital Marketing, Web Development, <br> Video Content and Communication Design"
        />

        <div className="row align-items-center">
          <div className="col-lg-5">
            <SectionTitleTwo
              subTitle={`Portfolio ${slug

                ? `<span class='fw-bold'>(${toTitleCase(slug)})</span>`
                : ""
                }`}
              title="Our Work"
            />
          </div>
          <div className="col-lg-7" data-aos="fade-up">
            <WorkFilter
              categories={categories}
              handleProjectWithCategory={handleProjectWithCategory}
            />
          </div>
        </div>
        {/* {`Total record is ${filterProjects.length}`} */}
        {loading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            dataLength={visibleData.length} // Current number of visible items
            next={loadMoreData} // Function to load more data
            hasMore={hasMore} // Whether there is more data to load
            loader={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <BeatLoader color="#0a507a" />
              </div>
            }
            endMessage={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p className="text-primary fw-bold">
                  You have reached the end of this section.
                </p>
              </div>
            } // Message when all data is shown
          >
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6">
              {visibleData &&
                visibleData.map((single, index) => (
                  <div key={index} className="col mb-6" data-aos="fade-up">
                    <WorkItemTwo classOption="box-border" data={single} />
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default WorkContainer;
