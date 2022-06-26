import java.util.List;

public class XNode implements Node {
    private Node parent;

    public XNode(Node parent) {
        this.parent = parent;
    }

    @Override
    public List<Node> getChildren() {
        return null;
    }

    public String toString() {
        return "x";
    }

    @Override
    public Double eval(Double x) {
        return x;
    }
}
