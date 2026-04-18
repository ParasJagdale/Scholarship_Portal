import SchemeCard from "../../components/cards/SchemeCard";
import SearchFilterBar from "../../components/common/SearchFilterBar";
import SectionHeader from "../../components/common/SectionHeader";
import { mockSchemes } from "../../data/mockSchemes";

function SchemesPage() {
  return (
    <div>
      <SectionHeader
        title="Scholarship Schemes"
        subtitle="Discover national, state and category based scholarships"
      />
      <SearchFilterBar
        placeholder="Search scheme by name, department, category"
        filters={[
          "All",
          "Merit",
          "Technical",
          "Social Justice",
          "Higher Education",
        ]}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockSchemes.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  );
}

export default SchemesPage;
