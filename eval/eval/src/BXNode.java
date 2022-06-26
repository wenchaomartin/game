import java.util.List;

public class BXNode implements Node {
    private Node parent;

    private Double constant;

    public BXNode(Node parent, Double constant) {
        this.parent = parent;
        this.constant = constant;
    }

    @Override
    public List<Node> getChildren() {
        return null;
    }

    @Override
    public Double eval(Double x) {
        return constant * x;
    }

    @Override
    public String toString() {
        return constant + "x";
    }
}
