import java.util.List;


public interface Node {
    /**
     * 获取子节点
     *
     * @return
     */
    List<Node> getChildren();

    String toString();

    Double eval(Double x);
}
