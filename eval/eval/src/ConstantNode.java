import java.util.List;

public class ConstantNode implements Node {

    private Node parent;
    private Double constant;


    public ConstantNode(Node parent, Double constant) {
        this.constant = constant;
        this.parent = parent;
    }

    @Override
    public List<Node> getChildren() {
        return null;
    }

    @Override
    public Double eval(Double x) {
        return constant;
    }
}
