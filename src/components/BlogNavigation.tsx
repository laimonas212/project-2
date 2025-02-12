import { MoveLeft, MoveRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BlogEntry {
    image: string;
    title: string;
    excerpt: string;
    url: string;
}

interface BlogNavigationProps {
    blogEntries: BlogEntry[];
}

const BlogNavigation: React.FC<BlogNavigationProps> = ({ blogEntries }) => {
    const location = useLocation();
    const currentIndex = blogEntries.findIndex(entry => entry.url === location.pathname);

    const prevEntry = currentIndex > 0 ? blogEntries[currentIndex - 1] : null;
    const nextEntry = currentIndex < blogEntries.length - 1 ? blogEntries[currentIndex + 1] : null;

    return (
        <div className="flex justify-between items-center my-16 border-t border-gray-600 pt-8 max-w-2xl mx-auto">
            {prevEntry ? (
                <Link to={prevEntry.url} className="flex items-center gap-4 text-electric-blue hover:text-electric-blue/70">
                    <MoveLeft className="w-6 h-6 text-gray-400" />
                    <img src={prevEntry.image} alt={prevEntry.title} className="w-16 h-auto object-cover rounded-md shadow-md" />
                    <span className="text-sm font-semibold">{prevEntry.title}</span>
                </Link>
            ) : <div className="w-32" />}

            {nextEntry ? (
                <Link to={nextEntry.url} className="flex items-center gap-4 text-electric-blue hover:text-electric-blue/70 text-right">
                    <span className="text-sm font-semibold">{nextEntry.title}</span>
                    <img src={nextEntry.image} alt={nextEntry.title} className="w-16 h-auto object-cover rounded-md shadow-md" />
                    <MoveRight className="w-6 h-6 text-gray-400" />
                </Link>
            ) : <div className="w-32" />}
        </div>
    );
};

export default BlogNavigation;
