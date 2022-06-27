import java.util.List;

public class LogNode extends UnaryNode {


    public LogNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }


    @Override
    public String toString() {
        return "log" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.log(children.get(0).eval(x));
    }
}
